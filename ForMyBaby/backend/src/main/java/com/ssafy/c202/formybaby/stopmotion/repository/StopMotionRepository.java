package com.ssafy.c202.formybaby.stopmotion.repository;
import com.ssafy.c202.formybaby.stopmotion.entity.StopMotion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StopMotionRepository extends JpaRepository<StopMotion, Long> {
    Optional<StopMotion> findByBaby_BabyId(Long babyId);
    Optional<StopMotion> findFirstByBaby_BabyIdOrderByCreatedAtDesc(Long babyId);
    int countByBaby_BabyIdOrderByCreatedAtDesc(Long babyId);
}