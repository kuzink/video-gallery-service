package com.kuzin.videogalleryservice.config;


import org.springframework.stereotype.*;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

@Component
public class SpaWebFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(final HttpServletRequest request, final HttpServletResponse response,
	                                final FilterChain filterChain) throws ServletException, IOException {

		final String path = request.getRequestURI();

		if (!path.startsWith("/api") && !path.contains(".") && path.matches("/(.*)")) {
			request.getRequestDispatcher("/").forward(request, response);
			return;
		}

		filterChain.doFilter(request, response);
	}
}