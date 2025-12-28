"use client";

import dynamic from "next/dynamic";

// CesiumJS SSR 비활성화
const CesiumViewer = dynamic(() => import("@/components/cesium/CesiumViewer"), {
    ssr: false,
});

function CesiumContainer() {
    return <CesiumViewer />;
}

export default CesiumContainer;
