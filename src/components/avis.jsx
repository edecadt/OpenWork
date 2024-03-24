import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Avis = () => {
    const avisContainer = {
        position: 'relative',
        top: '-300px',
        width: '100%',
        height: '550px',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    };

    const avisContent = {
        textAlign: 'center',
    };

    const avisText = {
        position: 'absolute',
        top: '50px',
        left: '42.5%',
        fontFamily: 'Inter, sans-serif',
        fontSize: '36px',
    };
    
    const carouselStyle = {
        position: 'absolute',
        top: '450px',
        left: '300px',
        width: '1300px',
    }

    return (
        <div style={avisContainer}>
            <div style={avisContent}>
                <p style={avisText}>Clients Testimonial</p>
                <Carousel style={carouselStyle}>
                    <CarouselContent>
                        <CarouselItem>1</CarouselItem>
                        <CarouselItem>2</CarouselItem>
                        <CarouselItem>3</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </div>
    );
};

export default Avis;