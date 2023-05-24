package com.kuzin.videogalleryservice.service;

import com.kuzin.videogalleryservice.dto.*;
import com.kuzin.videogalleryservice.repository.domain.SlideEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.*;

import java.util.*;

import static com.kuzin.videogalleryservice.util.FileSystemUtil.loadFileBytes;
import static com.kuzin.videogalleryservice.util.HelperUtil.LOW_DASH_SYMBOL;
import static com.kuzin.videogalleryservice.util.HelperUtil.SLASH_SYMBOL;
import static java.lang.Integer.parseInt;
import static java.util.Comparator.comparingInt;
import static java.util.stream.Collectors.*;

@Service
@Slf4j
public class SlideServiceImpl implements SlideService {

    private final List<SlideEntity> slides;
    private final List<String> folderNames;
    private final String slidesLocation;
    private final String girlName;

    @Autowired
    public SlideServiceImpl(final List<SlideEntity> slides, final List<String> folderNames,
                            @Value("${slides.location}") final String slidesLocation,
                            @Value("${girl.name}") final String girlName) {
        this.slides = slides;
        this.folderNames = folderNames;
        this.slidesLocation = slidesLocation;
        this.girlName = girlName;
    }

    @Override
    public List<SlideDto> getSlides() {
        System.out.println("girlName: " + girlName);
        log.info("girlName: " + girlName);

        final List<SlideDto> slidesList = new ArrayList<>();

        final String randomSlidesFolder = folderNames.get(new Random().nextInt(folderNames.size()));

        final Map<String, List<SlideEntity>> matchingSlidesMap = slides.stream()
                .filter(it -> it.getFolderName().equals(randomSlidesFolder))
                .collect(
                    groupingBy(SlideEntity::getSubFolderName,
                        () -> new TreeMap<>(comparingInt(el -> parseInt(el.split(LOW_DASH_SYMBOL)[0]))),
                        toList()
                    )
                );

        for (final List<SlideEntity> value : matchingSlidesMap.values()) {
            final SlideEntity randomSlide = value.get(new Random().nextInt(value.size()));
            slidesList.add(toSlide(randomSlide));
        }

        return slidesList;
    }

    private SlideDto toSlide(final SlideEntity slideEntity) {
        return SlideDto.builder()
                .title(getSlideTitle(slideEntity))
                .bytes(getSlideBytes(slideEntity))
                .build();
    }

    private String getSlideTitle(final SlideEntity slideEntity) {
        return slideEntity.getSubFolderName().split("_")[1];
    }

    private byte[] getSlideBytes(final SlideEntity slideEntity) {
        final String path = slidesLocation.concat(SLASH_SYMBOL)
                .concat(slideEntity.getFolderName()).concat(SLASH_SYMBOL)
                .concat(slideEntity.getSubFolderName()).concat(SLASH_SYMBOL)
                .concat(slideEntity.getName());

        return loadFileBytes(path);
    }
}
