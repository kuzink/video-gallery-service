package com.kuzin.videogalleryservice.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class SlideDto {

    @NotBlank
    private String title;

    @NotNull
    @ToString.Exclude
    private byte[] bytes;
}
