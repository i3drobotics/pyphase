#!/usr/bin/env python3

"""!
 @authors Ben Knight (bknight@i3drobotics.com)
 @date 2021-05-26
 @copyright Copyright (c) I3D Robotics Ltd, 2021
 @file test_stereobm.py
 @brief Unit tests for Stereo Block Matcher class
 @details Unit tests generated using PyTest
"""

import os
import time
from phase.pyphase.types import StereoMatcherType
from phase.pyphase.types import CameraDeviceInfo
from phase.pyphase.types import CameraDeviceType, CameraInterfaceType
from phase.pyphase.stereocamera import createStereoCamera
from phase.pyphase.stereomatcher import StereoParams, createStereoMatcher
from phase.pyphase.stereomatcher import StereoBM
from phase.pyphase import readImage

def test_StereoBM():
    # Test initalisation of StereoBM
    matcher = StereoBM()
    del matcher

def test_StereoBM_params():
    # Test setting StereoBM parameters
    script_path = os.path.dirname(os.path.realpath(__file__))
    data_folder = os.path.join(
        script_path, "..", "..", "data")

    left_image_file = os.path.join(data_folder, "left.png")
    right_image_file = os.path.join(data_folder, "right.png")

    left_image = readImage(left_image_file)
    right_image = readImage(right_image_file)

    stereo_params = StereoParams(StereoMatcherType.STEREO_MATCHER_BM,
        11, 0, 25, False)

    capture_count = 20
    matcher = createStereoMatcher(stereo_params)

    match_result = matcher.compute(left_image, right_image)
    assert match_result.disparity[0,0] == -16
    assert match_result.disparity[20,20] == -16
    assert match_result.disparity[222,222] == -16

    del matcher

def test_StereoBM_params_read_callback():
    # Test the StereoBM matcher virtual Pylon stereo camera by read callback
    left_serial = "0815-0000"
    right_serial = "0815-0001"
    device_type = CameraDeviceType.DEVICE_TYPE_GENERIC_PYLON  # DEVICE_TYPE_TITANIA / DEVICE_TYPE_PHOBOS
    interface_type = CameraInterfaceType.INTERFACE_TYPE_VIRTUAL  # INTERFACE_TYPE_USB / INTERFACE_TYPE_GIGE

    device_info = CameraDeviceInfo(
        left_serial, right_serial, "virtual-camera",
        device_type,
        interface_type
    )

    cam = createStereoCamera(device_info)

    matcher = StereoBM()
    matcher.setWindowSize(11)
    matcher.setMinDisparity(0)
    matcher.setNumDisparities(16*300)

    frames = 3
    connected = cam.connect()
    max_read_duration = 1
    assert connected is True
    if connected:
        print("Capturing continous frames...")
        cam.startCapture()
        while(cam.getCaptureCount() < frames):
            result = cam.read()
            matcher.startComputeThread(result.left, result.right)
            read_start = time.time()
            while matcher.isComputeThreadRunning():
                # To make sure function run something
                print("Thread is computing")
                # check read is not taking too long
                read_end = time.time()
                duration = read_end - read_start
                assert (duration < max_read_duration)
                if (duration > max_read_duration):
                    break
            assert matcher.getComputeThreadResult().valid

            assert matcher.getComputeThreadResult().disparity[0,0] == -16
            assert matcher.getComputeThreadResult().disparity[20,20] == -16
            assert matcher.getComputeThreadResult().disparity[222,222] == -16
