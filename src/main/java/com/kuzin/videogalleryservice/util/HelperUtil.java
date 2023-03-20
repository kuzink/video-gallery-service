package com.kuzin.videogalleryservice.util;

import java.text.*;

public class HelperUtil {

	public static final String SLASH = "/";
	public static final String INITIAL_THUMBNAIL_POSTFIX = "_init";

	public static String removeFileExtension(String filename, boolean removeAllExtensions) {
		if (filename == null || filename.isEmpty()) {
			return filename;
		}

		String extPattern = "(?<!^)[.]" + (removeAllExtensions ? ".*" : "[^.]*$");
		return filename.replaceAll(extPattern, "");
	}

	public static String convertToHumanReadableSize(final long bytes) {

		final long absB = bytes == Long.MIN_VALUE ? Long.MAX_VALUE : Math.abs(bytes);

		if (absB < 1024) {
			return bytes + " B";
		}

		long value = absB;
		final CharacterIterator ci = new StringCharacterIterator("KMGTPE");

		for (int i = 40; i >= 0 && absB > 0xfffccccccccccccL >> i; i -= 10) {
			value >>= 10;
			ci.next();
		}
		value *= Long.signum(bytes);

		return String.format("%.2f %cB", value / 1024.0, ci.current())
			.replace(",", ".")
			.replace("B", "b");
	}
}
