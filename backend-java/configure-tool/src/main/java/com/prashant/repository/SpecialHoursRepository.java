package com.prashant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.prashant.entity.SpecialHours;

@Repository
public interface SpecialHoursRepository extends JpaRepository<SpecialHours, Long> {
}
