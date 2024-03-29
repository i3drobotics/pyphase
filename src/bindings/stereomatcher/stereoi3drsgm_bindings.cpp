/*!
 * @authors Ben Knight (bknight@i3drobotics.com)
 * @date 2021-05-26
 * @copyright Copyright (c) I3D Robotics Ltd, 2021
 * 
 * @file stereoi3drsgm_bindings.cpp
 * @brief I3DR's Semi-Global Stereo Matcher class python bindings
 * @details Python bindings generated using pybind11
 */

#include "pybind11/pybind11.h"
#include <pybind11/stl.h>
#include <pybind11/numpy.h>
#include "ndarray_converter.h"

#include <phase/stereomatcher/stereoi3drsgm.h>

namespace py = pybind11;

void init_stereoi3drsgm(py::module_ &m) {
    NDArrayConverter::init_numpy();
    py::class_<I3DR::Phase::StereoI3DRSGM>(m, "StereoI3DRSGM", R"(
        I3DRS's stereo semi-global matcher for generting disparity from stereo images.
    
        )")
        .def(py::init<>(), R"(
            Initalise Stereo matcher and set default matching parameters
        )")
        .def(py::init<I3DR::Phase::StereoParams>(), R"(
            Initalise Stereo matcher and use provided StereoParams to set matching parameters
            
            )", py::arg("stereo_params"))
        .def("compute", &I3DR::Phase::StereoI3DRSGM::compute, R"(
            Compute stereo matching
            Generates disparity from left and right images

            Parameters
            ----------
            left_image : numpy.ndarray
                Left image of stereo pair
            right_image : numpy.ndarray
                Right image of stereo pair
            )", py::arg("left_image"), py::arg("right_image"))
        .def("startComputeThread", &I3DR::Phase::StereoI3DRSGM::startComputeThread, R"(
            Start compute thread
            Generates disparity from left and right images
            Use getComputeThreadResult() to get results of compute

            Parameters
            ----------
            left_image : numpy.ndarray
                Left image of stereo pair
            right_image : numpy.ndarray
                Right image of stereo pair
            )", py::arg("left_image"), py::arg("right_image"))
        .def("setComputeThreadCallback", &I3DR::Phase::StereoI3DRSGM::setComputeThreadCallback, R"(
            Set callback function to run when compute thread completes
            Should be used with startComputeThread()
            Useful as an external trigger that compute is complete
            and results can be retrieved.

            Parameters
            ----------
            f : callback
            )", py::arg("callback"))
        .def("isComputeThreadRunning", &I3DR::Phase::StereoI3DRSGM::isComputeThreadRunning, R"(
            Check if compute thread is running

            Returns
            -------
            bool
                True is compute thread is running
            )")
        .def("getComputeThreadResult", &I3DR::Phase::StereoI3DRSGM::getComputeThreadResult, R"(
            Get results from threaded compute process
            Should be used with startComputeThread()

            Returns
            -------
            StereoMatcherComputeResult
                Result from compute

            )")
        .def("setWindowSize", &I3DR::Phase::StereoI3DRSGM::setWindowSize, R"(
            Set window size value

            Parameters
            ----------
            value : int
                Desired value of window size value
            )", py::arg("value"))
        .def("getWindowSize", &I3DR::Phase::StereoI3DRSGM::getWindowSize, R"(
            Get window size value

            Returns
            -------
            value : int
                Value of window size
            )")
        .def("setMinDisparity", &I3DR::Phase::StereoI3DRSGM::setMinDisparity, R"(
            Set minimum disparity value

            Parameters
            ----------
            value : int
                Desired value of minimum disparity value
            )", py::arg("value"))
        .def("getMinDisparity", &I3DR::Phase::StereoI3DRSGM::getMinDisparity, R"(
            Get minimum disparity value

            Returns
            -------
            value : int
                Value of minimum disparity
            )")
        .def("setNumDisparities", &I3DR::Phase::StereoI3DRSGM::setNumDisparities, R"(
            Set number of disparities

            Parameters
            ----------
            value : int
                Desired value of number of disparities
            )", py::arg("value"))
        .def("getNumDisparities", &I3DR::Phase::StereoI3DRSGM::getNumDisparities, R"(
            Get number of disparities

            Returns
            -------
            value : int
                Value of number of disparities
            )")
        .def("setSpeckleMaxSize", &I3DR::Phase::StereoI3DRSGM::setSpeckleMaxSize, R"(
            Set speckle maximum size
            
            Parameters
            ----------
            value : int
                Value of speckle maximum size
            )", py::arg("value"))
        .def("getSpeckleMaxSize", &I3DR::Phase::StereoI3DRSGM::getSpeckleMaxSize, R"(
            Get speckle maximum size

            Returns
            -------
            value : int
                Value of speckle maximum size
            )")
        .def("setSpeckleMaxDiff", &I3DR::Phase::StereoI3DRSGM::setSpeckleMaxDiff, R"(
            Set speckle maximum difference
            
            Parameters
            ----------
            value : float
                Value of speckle maximum difference
            )", py::arg("value"))
        .def("getSpeckleMaxDiff", &I3DR::Phase::StereoI3DRSGM::getSpeckleMaxDiff, R"(
            Get speckle maximum difference

            Returns
            -------
            value : int
                Value of speckle maximum difference
            )")
        .def("enableSubpixel", &I3DR::Phase::StereoI3DRSGM::enableSubpixel, R"(
            To enable subpixel
            
            Parameters
            ----------
            enable : bool
                Set True to enable subpixel
            )", py::arg("enable"))
        .def("isSubpixelEnabled", &I3DR::Phase::StereoI3DRSGM::isSubpixelEnabled, R"(
            Get enable/disable status of subpixel refinement
            
            Returns
            -------
            bool
                true if enabled
            )")
        .def("enableInterpolation", &I3DR::Phase::StereoI3DRSGM::enableInterpolation, R"(
            To enable interpolation
            
            Parameters
            ----------
            enable : bool
                Set True to enable interpolation
            )", py::arg("enable"))
        .def("isInterpolationEnabled", &I3DR::Phase::StereoI3DRSGM::isInterpolationEnabled, R"(
            Get enable/disable status of interpolation
            
            Returns
            -------
            bool
                true if enabled
            )")
        .def("enableOcclusionDetection", &I3DR::Phase::StereoI3DRSGM::enableOcclusionDetection, R"(
            To enable occlusion detection
            
            Parameters
            ----------
            enable : bool
                Set True to enable occlusion detection
            )", py::arg("enable"))
        .def("isOcclusionDetectionEnabled", &I3DR::Phase::StereoI3DRSGM::isOcclusionDetectionEnabled, R"(
            Get enable/disable status of occlusion detection
            
            Returns
            -------
            bool
                true if enabled
            )")
        .def("enableOcclusionInterpolation", &I3DR::Phase::StereoI3DRSGM::enableOcclusionInterpolation, R"(
            To enable occlusion interpolation
            
            Parameters
            ----------
            enable : bool
                Set True to enable occlusion interpolation
            )", py::arg("enable"))
        .def("isOcclusionInterpolationEnabled", &I3DR::Phase::StereoI3DRSGM::isOcclusionInterpolationEnabled, R"(
            Get enable/disable status of occlusion interpolation
            
            Returns
            -------
            bool
                true if enabled
            )")
        .def_static("isLicenseValid", &I3DR::Phase::StereoI3DRSGM::isLicenseValid, R"(
            Check if the I3DRSGM license is valid
            
            Returns
            -------
            bool
                True if license is valid
            )");
}