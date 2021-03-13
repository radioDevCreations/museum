import {useRef, useEffect} from 'react';
import './Liner.sass';

const Liner = () => {
  
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
      const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const part = canvas.width/7;

      const context = canvas?.getContext('2d') as CanvasRenderingContext2D;

      context.lineWidth = 2;
      context.strokeStyle = 'rgba(180, 180, 180, 0.01)';

      context.beginPath();
      
    for (let i:number = canvas.width - part; i > 0; i -= part) 
      {
      context.moveTo(i, 0);
      context.lineTo(i,canvas.height);
      context.stroke();
     }
     for (let i:number = part; i < canvas.width; i += part) 
      {
      context.moveTo(i,canvas.height);
      context.lineTo(i, 0);
      context.stroke();
     }
    }, [])
    
    return <canvas ref={canvasRef} className="liner"/>
  }
 
export default Liner;