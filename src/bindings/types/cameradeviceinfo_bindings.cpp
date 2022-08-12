/*!
 * @authors Ben Knight (bknight@i3drobotics.com)
 * @date 2021-05-26
 * @copyright Copyright (c) I3D Robotics Ltd, 2021
 * 
 * @file abstractstereocamera_bindings.cpp
 * @brief Abstract Stereo Camera class python bindings
 * @details Python bindings generated using pybind11
 */

#include "pybind11/pybind11.h"
#include "ndarray_converter.h"

#include <phase/types/cameradeviceinfo.h>

namespace py = pybind11;

void init_cameradeviceinfo(py::module_ &m) {
    NDArrayConverter::init_numpy();
    py::class_<I3DR::Phase::CameraDeviceInfo>(m, "CameraDeviceInfo", R"(
        Camera info class contains camera serials, camera type and connection type
        )")
        .def(py::init<const char*,const char*,const char*,
            I3DR::Phase::CameraDeviceType,I3DR::Phase::CameraInterfaceType>(), R"(TODOC)")
        .def("setLeftCameraSerial", &I3DR::Phase::CameraDeviceInfo::setLeftCameraSerial, R"(
            Set the left camera serial

            Parameters
            ----------
            left_camera_serial : str
            )")
        .def("setRightCameraSerial", &I3DR::Phase::CameraDeviceInfo::setRightCameraSerial, R"(
            Set the right camera serial

            Parameters
            ----------
            right_camera_serial : str
          )")
        .def("setUniqueSerial", &I3DR::Phase::CameraDeviceInfo::setUniqueSerial, R"(
            Set the camera unique serial

            Parameters
            ----------
            unique_serial : str
            )")
        .def("getLeftCameraSerial", &I3DR::Phase::CameraDeviceInfo::getLeftCameraSerial, R"(
            Get the left camera serial

            Returns
            -------
            left_camera_serial : str
            )")
        .def("getRightCameraSerial", &I3DR::Phase::CameraDeviceInfo::getRightCameraSerial, R"(
            Get the right camera serial

            Returns
            -------
            right_camera_serial : str
            )")
        .def("getUniqueSerial", &I3DR::Phase::CameraDeviceInfo::getUniqueSerial, R"(
            Get the camera unique serial

            Returns
            -------
            unique_serial : str
            )")
        .def_readwrite("device_type", &I3DR::Phase::CameraDeviceInfo::device_type, R"(
            Device type in enum
            
            )")
        .def_readwrite("interface_type", &I3DR::Phase::CameraDeviceInfo::interface_type, R"(
            Interface type in enum

            )");
}