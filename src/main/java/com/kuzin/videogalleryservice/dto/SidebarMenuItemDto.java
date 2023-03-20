package com.kuzin.videogalleryservice.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonInclude(NON_NULL)
public class SidebarMenuItemDto {

    @NotNull
    private Integer id;

    @NotBlank
    private String title;

    private String icon;

    private Boolean isHead;

    private List<SidebarMenuItemDto> children;
}
