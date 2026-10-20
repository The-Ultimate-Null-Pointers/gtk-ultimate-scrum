import { useEffect, useId, useRef } from "react";
import imageMapResize from "image-map-resizer";

/*
    My dumbass decided it wanted to make this component reusable. This is completly pointless as having multiple team photos on one page is dumb. 
    I did it anyways. If you were wondering why there is so much code, that's why.
    - Michael M.
*/

function TeamPhoto() {
    const containerRef = useRef(null)
    const mapId = useId()

    useEffect(() => {
        const container = containerRef.current;
        const image = container.querySelector("img")
        const map = container.querySelector("map")

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
    }, [])

    return (
        <div className="team-photo-object" ref={containerRef}>
            {/* Image is 1327 x 1912 pixels */}
            <img src="/TUNP-team-photo.jpg" useMap={`#${mapId}`} alt="Team Photo" />

            <map name={mapId}>
                {/* Professor Pogue */}
                <area shape="circle" coords="750,250,80" href="https://github.com/EricJPogue" target="_blank" alt="Eric Pouge" />
                {/* Michael */}
                <area shape="circle" coords="460,270,80" href="https://michael-mihailov.github.io/CPSC44000-get-to-know-me/" target="_blank" alt="Michael Mihailov (the G.O.A.T.)" />
                {/* Beth */}
                <area shape="circle" coords="509,1125,110" href="https://bethfeddes.github.io/getting-to-know/" target="_blank" alt="Bethany Feddes (the ACTUAL G.O.A.T.)" />
                {/* Jacob */}
                <area shape="circle" coords="150,200,90" href="https://jacobpetrosky.github.io/getting-to-know-me/" target="_blank" alt="Jacob Petrosky" />
                {/* Troy */ }]
                <area shape="circle" coords="1000,350,90" href="https://troyanaill.github.io/getting-to-know-each-other/" target="_blank" alt="Troy Naill" />
               
                {/* ADD YOUR IMAGE MAPPINGS HERE GUYS!!! */}

            </map>
        </div>
    )
}

export default TeamPhoto