import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const LightGrayRectangleWithImage = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '794px',
  };

  const rectangleStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '100px 0',
    marginTop: '130px',
  };

  const imageStyle = {
    position: 'absolute',
    top: 100,
    left: 1150,
    width: '492px',
    height: '382px',
    backgroundColor: '#f2f2f2'
  };

  const buttonStyle = {
    width: '131px',
    height: '38px',
    backgroundColor: '#0A65CC',
    color: 'white',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '21px',
    borderRadius: '10px',
    marginLeft: '79%'
  };

  const titleStyle = {
    fontSize: '62px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '540',
    marginLeft: '220px',
    marginTop: '-25px',
  };

  const soustitleStyle = {
    position: 'relative',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '540',
    marginLeft: '220px',
    color: '#808080',
    top: '15px'
  };

  const whiteRectangleStyle = {
    width: '679px',
    height: '80px',
    backgroundColor: 'white',
    borderRadius: '8px',
    position: 'absolute',
    top: '400px',
    left: '30%',
    transform: 'translateX(-50%)',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const grayVerticalLineStyle = {
    width: '2px',
    height: '40px',
    backgroundColor: '#EDEDED',
    position: 'absolute',
    top: '25%',
    left: '40%',
    transform: 'translateX(-50%)',
  };

  const logoLoca = {
    position: 'absolute',
    top: '26%',
    left: '43%',
    width: '36px',
    height: '36px',
  };
  
  const logoLoupe = {
    position: 'absolute',
    top: '29%',
    left: '3%',
    width: '30px',
    height: '30px',
  };

  const whiteRectangleFirst = {
    marginLeft: '10%',
    marginTop: '14%',
    width: '350px',
    height: '150px',
    backgroundColor: 'white',
    borderRadius: '8px',
  };

  const whiteRectangleSec = {
    marginLeft: '30%',
    marginTop: '-7.85%',
    width: '350px',
    height: '150px',
    backgroundColor: 'white',
    borderRadius: '8px',
  };
  
  const whiteRectangleThird = {
    marginLeft: '50%',
    marginTop: '-7.85%',
    width: '350px',
    height: '150px',
    backgroundColor: 'white',
    borderRadius: '8px',
  };
  
  const whiteRectangleFour = {
    marginLeft: '70%',
    marginTop: '-7.85%',
    width: '350px',
    height: '150px',
    backgroundColor: 'white',
    borderRadius: '8px',
  };

  const logoBagage1 = {
    position: 'relative',
    top: '32%',
    left: '10%',
    width: '50px',
    height: '50px',
  }

  const generateGrayRectangles = (positions) => {
    return positions.map((position, index) => (
      <div
        key={index}
        style={{
          width: '72px',
          height: '72px',
          backgroundColor: '#EDEDED',
          position: 'absolute',
          left: position.left,
          top: position.top,
          borderRadius: '8px',
        }}
      />
    ));
  };

  const positions = [
    { top: '77%', left: '11.5%' },
    { top: '77%', left: '31.5%' },
    { top: '77%', left: '51.5%' },
    { top: '77%', left: '71.5%' },
  ];

  const logo = [
    "/briefcase-business.png",
    "/hotel.png",
    "/user-round.png",
    "/briefcase-business.png",
  ];

  const renderRectangleWithImage = (x, y, imagePath) => {
    const rectangleStyleLogo = {
      position: 'absolute',
      top: y,
      left: x,
      width: '100px',
      height: '100px',
      backgroundColor: '#f2f2f2',
      borderRadius: '8px',
    };

    const imageStyle = {
      
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '40px',
      height: '40px',
    };

    return (
      <div style={rectangleStyleLogo}>
        <img src={imagePath} style={imageStyle} alt="Rectangle with Image" />
      </div>
    );
  };

  const first = {
    position: 'relative',
    top: '18%',
    fontSize: '32px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '540',
    marginLeft: '130px',
  };

  const first2 = {
    position: 'relative',
    top: '18%',
    fontSize: '24px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '540',
    marginLeft: '130px',
    color: '#A8A8A8',
  };

  const regionStyle = {
    position: 'absolute',
    top: '25%',
    left: '50%',
  }

  return (
    <div style={containerStyle}>
      <div style={rectangleStyle}>
        <h1 style={titleStyle}>
          Find a job that matches
        </h1>
        <h1 style={titleStyle}>
          your desires and skills.
        </h1>
        <h2 style={soustitleStyle}>
          Openwork,
        </h2>
        <h2 style={soustitleStyle}>
         the perfect job search platform for students, job seekers & employers.
        </h2>
        <img src="/work.png" style={imageStyle} />
        <div style={whiteRectangleStyle}>
          <img src='/logo_loupe.png' style={logoLoupe}/>
          <img src='/logo_loca.png' style={logoLoca}/>
          <Input
            style={{
              position: 'absolute',
              left: '10%',
              top: '26%',
              height: '38px',
              width: '180px',
              borderRadius: '12px',
              color: '#000000',
            }}
            placeholder="Jobs, companies, etc..."
          />
          <div style={grayVerticalLineStyle}/>
          <Select>
            <SelectTrigger style={regionStyle} className="w-[180px]">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="ARA">Auvergne-Rhône-Alpes (ARA)</SelectItem>
                <SelectItem value="BFC">Bourgogne-Franche-Comté (BFC)</SelectItem>
                <SelectItem value="BRE">Bretagne (BRE)</SelectItem>
                <SelectItem value="CVL">Centre-Val de Loire (CVL)</SelectItem>
                <SelectItem value="COR">Corse (COR)</SelectItem>
                <SelectItem value="GES">Grand Est (GES)</SelectItem>
                <SelectItem value="HDF">Haut-de-France (HDF)</SelectItem>
                <SelectItem value="IDF">Île-de-France (IDF)</SelectItem>
                <SelectItem value="NOR">Normandie (NOR)</SelectItem>
                <SelectItem value="NAQ">Nouvelle-Aquitaine (NAQ)</SelectItem>
                <SelectItem value="OCC">Occitanie (OCC)</SelectItem>
                <SelectItem value="PDL">Pays de la Loire (PDL)</SelectItem>
                <SelectItem value="PAC">Provence-Alpes-Côte d'Azur (PAC)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <button style={buttonStyle}>Find Job</button>
        </div>
        <div style={whiteRectangleFirst}>
          {renderRectangleWithImage('11%', '73%', '/briefcase-business.png')}
          <h2 style={first}> 26,9 million </h2>
          <h3 style={first2}> Live Jobs </h3>
        </div> 
        <div style={whiteRectangleSec}>
          {renderRectangleWithImage('31%', '73%', '/hotel.png')}
          <h2 style={first}> 97 354 </h2>
          <h3 style={first2}> Companies </h3>
        </div>
        <div style={whiteRectangleThird}>
          {renderRectangleWithImage('51%', '73%', '/user-round.png')}
          <h2 style={first}> 38 471 548 </h2>
          <h3 style={first2}> Candidates </h3>
        </div>
        <div style={whiteRectangleFour}>
          {renderRectangleWithImage('71%', '73%', '/briefcase-business.png')}
          <h2 style={first}> 7 532 </h2>
          <h3 style={first2}> New jobs </h3>
        </div>
      </div>
    </div>
  );
};

export default LightGrayRectangleWithImage;
