package com.prashant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prashant.entity.SpecialHours;
import com.prashant.repository.SpecialHoursRepository;

@Service
public class SpecialHoursService {
	
	@Autowired
    private SpecialHoursRepository repository;

	public SpecialHours addSpecialHours(SpecialHours specialHours) {
		return repository.save(specialHours);
    }
	
	public List<SpecialHours> getAllSpecialHours() {
		return repository.findAll();
    }
}
