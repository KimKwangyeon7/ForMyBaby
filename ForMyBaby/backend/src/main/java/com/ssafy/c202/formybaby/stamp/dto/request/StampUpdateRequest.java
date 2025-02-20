package com.ssafy.c202.formybaby.stamp.dto.request;

import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;
import java.util.List;

public record StampUpdateRequest(
        MultipartFile stampImg,
        String memo
) {}
