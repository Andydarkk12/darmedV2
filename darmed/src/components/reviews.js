import React, { useEffect } from 'react';
import {Map} from './map'
export const Reviews = () => {
    useEffect(() => {
        const r = "big_light_70000001087699472";
        const u = "PGhlYWQ+PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPgogICAgd2luZG93Ll9fc2l6ZV9fPSdiaWcnOwogICAgd2luZG93Ll9fdGhlbWVfXz0nbGlnaHQnOwogICAgd2luZG93Ll9fYnJhbmNoSWRfXz0nNzAwMDAwMDEwODc2OTk0NzInCiAgICB3aW5kb3cuX19vcmdJZF9fPSc3MDAwMDAwMTA4NzY5OTQ3MScKICAgPC9zY3JpcHQ+PHNjcmlwdCBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiB0eXBlPSJtb2R1bGUiIHNyYz0iaHR0cHM6Ly9kaXNrLjJnaXMuY29tL3dpZGdldC1jb25zdHJ1Y3Rvci9hc3NldHMvaWZyYW1lLmpzIj48L3NjcmlwdD48bGluayByZWw9Im1vZHVsZXByZWxvYWQiIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIGhyZWY9Imh0dHBzOi8vZGlzay4yZ2lzLmNvbS93aWRnZXQtY29uc3RydWN0b3IvYXNzZXRzL2RlZmF1bHRzLmpzIj48bGluayByZWw9InN0eWxlc2hlZXQiIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIGhyZWY9Imh0dHBzOi8vZGlzay4yZ2lzLmNvbS93aWRnZXQtY29uc3RydWN0b3IvYXNzZXRzL2RlZmF1bHRzLmNzcyI+PC9oZWFkPjxib2R5PjxkaXYgaWQ9ImlmcmFtZSI+PC9kaXY+PC9ib2R5Pg==";

        const l = document.getElementById(r);
        if (l) {
            l.contentWindow.document.open();
            l.contentWindow.document.write(decodeURIComponent(escape(atob(u))));
            l.contentWindow.document.close();
        }
    }, []);

    return (
        <div className='container'>
        <div className="review">
            <iframe 
                id="big_light_70000001087699472" 
                frameBorder="0" 
                width="100%" 
                height="624px" 
                sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation">
            </iframe>
        </div></div>
        
);
};
