'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import HireCard from './HireCard';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[600px] flex justify-between items-center max-lg:flex-col max-lg:justify-center max-lg:gap-12"
                ref={containerRef}
            >
                <div className="lg:max-w-[600px] flex flex-col justify-center items-start">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton uppercase">
                        <span className="text-primary">FULL STACK</span>
                        <br />
                        <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground max-w-[500px]">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Khuzaima Akram
                        </span>
                        . A creative Full-Stack Developer with hands-on
                        experience in building scalable, high-performance, and
                        responsive web applications using Laravel and modern
                        frontend technologies.
                    </p>
                </div>

                <div className="slide-up-and-fade relative z-[2] lg:mr-10">
                    <HireCard />
                </div>

                <div className="max-lg:hidden absolute bottom-[10%] right-[4%] flex flex-col gap-8 text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-4xl font-anton text-primary mb-1.5">
                            3+
                        </h5>
                        <p className="text-muted-foreground uppercase text-xs tracking-widest">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-4xl font-anton text-primary mb-1.5">
                            10+
                        </h5>
                        <p className="text-muted-foreground uppercase text-xs tracking-widest">
                            Projects Done
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-4xl font-anton text-primary mb-1.5">
                            300+
                        </h5>
                        <p className="text-muted-foreground uppercase text-xs tracking-widest">
                            Hours Worked
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
