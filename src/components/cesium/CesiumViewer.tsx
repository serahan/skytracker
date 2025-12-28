"use client";

import { Ion, Viewer } from "cesium";
import { useEffect, useRef } from "react";
import "cesium/Build/Cesium/Widgets/widgets.css";

function CesiumViewer() {
    const cesiumContainer = useRef<HTMLDivElement>(null);
    const viewerRef = useRef<Viewer | null>(null);

    useEffect(() => {
        Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_JS_TOKEN || "";

        window.CESIUM_BASE_URL = "cesium/";

        if (cesiumContainer.current && !viewerRef.current) {
            // viewer 생성
            viewerRef.current = new Viewer(cesiumContainer.current, {
                terrain: undefined,
                baseLayerPicker: true,
                animation: false,
                timeline: false,
                fullscreenButton: false,
                geocoder: false,
                homeButton: true,
                navigationHelpButton: false,
            });
        }

        // clean up
        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
                viewerRef.current = null;
            }
        };
    }, []);

    return (
        <div ref={cesiumContainer} style={{ width: "100%", height: "100vh" }} />
    );
}

export default CesiumViewer;
