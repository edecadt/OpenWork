import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const HowWork = () => {
    const containerStyle = {
        position: 'relative',
        top: '-115px',
        width: '100%',
        height: '794px',
        overflowX: 'hidden',
    };

    const popuStyle = {
        position: 'absolute',
        top: '10%',
        left: '220px',
        fontSize: '40px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '540',
    };

    const renderWhiteRectangle = (x, y) => {
      const rectangleWhiteStyle = {
        position: 'absolute',
        left: x,
        top: y,
        width: '350px',
        height: '110px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 0px 8px rgba(0.1, 0.1, 0.1, 0.1)',
      };

      return (
        <div style={rectangleWhiteStyle}>
        </div>
      );
    };

    const renderTwoText = (text, under_text, x, y) => {
        const text1 = {
            position: 'relative',
            top: y,
            left: x,
            marginBottom: '0px',
            fontSize: '24px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '540',
        }
    
        const text2 = {
            position: 'relative',
            top: y,
            left: x,
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '540',
            color: '#A8A8A8',
        }
    
        return (
            <div>
                <h1 style={text1}>{text}</h1>
                <h2 style={text2}>{under_text}</h2>
            </div>
        )
    }

    const renderRectangleWithImage = (x, y, imagePath) => {
      const rectangleStyleLogo = {
        position: 'absolute',
        top: y,
        left: x,
        width: '80px',
        height: '80px',
        backgroundColor: '#e7f0fa',
        borderRadius: '8px',
      };

      const imageStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '35px',
        height: '35px',
      };

      return (
        <div style={rectangleStyleLogo}>
          <img src={imagePath} style={imageStyle} alt="Rectangle with Image" />
        </div>
      );
    };

    const buttonStyle = {
        position: 'absolute',
        top: '12%',
        left: '85%',
        border: 'none',
        borderRadius: '2px',
        width: '150px',
        color: '#001be6',
    }

    const arrowStyle = {
        position: 'absolute',
        top: '13%',
        left: '91%'
    }

    return (
        <div style={containerStyle}>
            <h1 style={popuStyle}>Popular category</h1>
            <Link href={"/job"}><Button style={buttonStyle} variant="outline">View all</Button></Link>
            <img src='/arrow-right.png' style={arrowStyle}></img>
            <div>
                {renderWhiteRectangle('12%', '25%')}
                {renderRectangleWithImage('13%', '27%', '/pen-tool.png')}
                {renderTwoText('Graphics & Design', '357 Open position', '18%', '225px')}
            </div>
            <div>
                {renderWhiteRectangle('12%', '45%')}
                {renderRectangleWithImage('13%', '47%', '/music-4.png')}
                {renderTwoText('Graphics & Design', '357 Open position', '18%', '325px')}
            </div>
            <div>
                {renderWhiteRectangle('32%', '25%')}
                {renderRectangleWithImage('33%', '27%', '/code-xml.png')}
                {renderTwoText('Graphics & Design', '357 Open position', '38%', '110px')}
            </div>
            <div>
                {renderWhiteRectangle('32%', '45%')}
                {renderRectangleWithImage('33%', '47%', '/bar-chart-3.png')}
                {renderTwoText('Graphics & Design', '357 Open position', '38%', '210px')} 
            </div>
            <div>
                {renderWhiteRectangle('52%', '25%')}
                {renderRectangleWithImage('53%', '27%', '/megaphone.png')}
                {renderTwoText('Graphics & Design', '357 Open position', '58%', '-5px')}
            </div>
            <div>
                {renderWhiteRectangle('52%', '45%')}
                {renderRectangleWithImage('53%', '47%', '/hospital.png')}
                {renderTwoText('Graphics & Design', '357 Open position', '58%', '95px')}
            </div>
            <div>
                {renderWhiteRectangle('72%', '25%')}
                {renderRectangleWithImage('73%', '27%', '/monitor-play.png')}
                {renderTwoText('Graphics & Design', '357 Open position', '78%', '-120px')}
            </div>
            <div>
                {renderWhiteRectangle('72%', '45%')}
                {renderRectangleWithImage('73%', '47%', '/database.png')}
                {renderTwoText('Graphics & Design', '357 Open position', '78%', '-20px')}
            </div>
        </div>
    )
};

export default HowWork;