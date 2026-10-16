import { useEffect, useId, useRef } from "react";
import imageMapResize from "image-map-resizer";

/*
    My dumbass decided it wanted to make this component reusable. This is completly pointless as having multiple team photos on one page is dumb. 
    I did it anyways. If you were wondering why there is so much code, that's why.
    - Michael M.
*/

function TeamPhoto() {
    const containerRef = useRef(null);
    const mapId = useId();

    useEffect(() => {
        const container = containerRef.current;
        const image = container.querySelector("img");
        const map = container.querySelector("map");

        let initialized = false

        function initializeImageMap() {
            if (initialized || !image.complete || image.naturalWidth === 0) {
                return
            }

            initialized = true
            imageMapResize(map)
        }

        image.addEventListener("load", initializeImageMap)
        initializeImageMap()

        return () => {image.removeEventListener("load", initializeImageMap)}
    }, []);

    return (
        <div className="team-photo-object" ref={containerRef}>
            {/* Image is 1327 x 1912 pixels */}
            <img src="/TUNP-team-photo.jpg" useMap={`#${mapId}`} alt="Team Photo" />

            <map name={mapId}>
                <area shape="circle" coords="750,250,80" href="https://github.com/EricJPogue" target="_blank" alt="Eric Pouge" />
                {/* ADD YOUR IMAGE MAPPINGS HERE GUYS!!! */}
            </map>
        </div>
    );
}

export default TeamPhoto;