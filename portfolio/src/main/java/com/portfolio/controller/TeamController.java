package com.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/team")
public class TeamController {

	@GetMapping("/teamProject")
	public void teamProject() {}

	@GetMapping("/MZproject")
	public void MZproject() {}

	
	
}
