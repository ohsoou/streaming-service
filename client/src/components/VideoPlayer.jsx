import {useEffect, useRef} from "react";
import Hls from 'hls.js';

export function VideoPlayer() {

    const video = useRef();

    useEffect(() => {
        if(Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource('http://localhost:8089/live/test/index.m3u8');
            hls.attachMedia(video.current);
            // hls.on(Hls.Events.MANIFEST_PARSED, function () {
            //     video.play();
            // });
        }
    }, []);


    return (
        <video ref={video} className='player' controls></video>
    )
}