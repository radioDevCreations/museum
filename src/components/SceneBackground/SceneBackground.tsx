import {useRef, useEffect} from 'react';
import './SceneBackground.sass';

const SceneBackground = () => {
  
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
    canvas.height = document.querySelector(".slider")?.clientHeight as number;
    canvas.width = canvas.height;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;
    canvas.style.left = (window.innerWidth - canvas.width)/2 - 200 + "px";

              
    const context = canvas?.getContext('2d') as CanvasRenderingContext2D;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.fillStyle = '#fff';
    context.fill();

    }, [])
    
    return <canvas ref={canvasRef} className="scene-background"/>
  }
 
export default SceneBackground;