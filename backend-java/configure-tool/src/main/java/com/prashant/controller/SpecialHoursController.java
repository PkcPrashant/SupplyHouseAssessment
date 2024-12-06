package com.prashant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prashant.entity.SpecialHours;
import com.prashant.service.SpecialHoursService;

@RestController
@RequestMapping("/api/special-hours")
public class SpecialHoursController {
	
	@Autowired
	private SpecialHoursService service;
	
	@PostMapping
    public ResponseEntity<SpecialHours> addSpecialHours(@RequestBody SpecialHours specialHours) {
		SpecialHours created = service.addSpecialHours(specialHours);
        return ResponseEntity.ok(created);
    }
	
	@GetMapping
	public ResponseEntity<List<SpecialHours>> getAllSpecialHours() {
		List<SpecialHours> specialHoursList = service.getAllSpecialHours();
		return ResponseEntity.ok(specialHoursList);
	}

}
