# [Choice] Python version (use -bullseye variants on local arm64/Apple Silicon): 3, 3.10, 3.9, 3.8, 3.7, 3.6, 3-bullseye, 3.10-bullseye, 3.9-bullseye, 3.8-bullseye, 3.7-bullseye, 3.6-bullseye, 3-buster, 3.10-buster, 3.9-buster, 3.8-buster, 3.7-buster, 3.6-buster
ARG VARIANT=3
FROM mcr.microsoft.com/vscode/devcontainers/python:${VARIANT}

# Install pip requirements
COPY requirements.txt /tmp/pip-tmp/
RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt && \
    rm -rf /tmp/pip-tmp

# Install packages
RUN apt update && \
    export DEBIAN_FRONTEND=noninteractive && \
    apt install -y \
    libavcodec-dev libavformat-dev libswscale-dev \
    libgl-dev liblapack-dev libblas-dev libgtk2.0-dev \
    libgstreamer1.0-0 libgstreamer-plugins-base1.0-0 \
    zlib1g libstdc++6 libc6 libgcc1 \
    patchelf doxygen \
    && \
    rm -rf /var/lib/apt/lists/*

# Install Phase
RUN curl --output phase.deb -L https://github.com/i3drobotics/phase/releases/download/v0.0.26/phase-v0.0.26-ubuntu-20.04-x86_64.deb && \
    apt install -f ./phase.deb && \
    rm ./phase.deb

RUN mkdir build && cd build \
    cmake -DPhase_DIR="/opt/i3dr/phase/lib/cmake" .. && \
    make -j$(nproc)
