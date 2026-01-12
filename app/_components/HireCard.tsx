import React from 'react';
import { GENERAL_INFO } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const HireCard = () => {
    return (
        <a
            href={GENERAL_INFO.upworkProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl bg-[#1d1d1f] border border-white/10 hover:border-primary transition-all duration-300 relative overflow-hidden max-w-[400px] slide-up-and-fade shadow-2xl"
        >
            {/* Background Muted Logo */}
            <div className="absolute -bottom-12 -right-12 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity pointer-events-none grayscale invert">
                <Image
                    src="/logo/upwork.png"
                    alt="Upwork"
                    width={280}
                    height={280}
                    className="rotate-[15deg]"
                />
            </div>

            <div className="flex items-start justify-between relative z-[1]">
                <div className="flex items-center gap-4">
                    <div className="p-0 bg-white/5 rounded-xl relative group-hover:scale-105 transition-transform duration-500 overflow-hidden border border-white/10 shadow-lg">
                        <Image
                            src="/logo/profile.png"
                            alt="Khuzaima Akram"
                            width={64}
                            height={64}
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div>
                        <h4 className="text-2xl font-anton tracking-wide text-white uppercase">
                            HIRE ON UPWORK
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            {/* Top Rated Badge */}
                            <div
                                className="flex items-center gap-1.5"
                                title="Top Rated"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 28 28"
                                    className="size-6 drop-shadow-sm"
                                    role="img"
                                >
                                    <path
                                        fill="#1F57C3"
                                        d="M12 1.155a4 4 0 014 0l8.124 4.69a4 4 0 012 3.464v9.382a4 4 0 01-2 3.464L16 26.845a4 4 0 01-4 0l-8.124-4.69a4 4 0 01-2-3.464V9.309a4 4 0 012-3.464L12 1.155z"
                                    ></path>
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M14.761 7.542l1.188 3.201 3.285.184a.78.78 0 01.448.173c.13.104.226.247.277.41a.9.9 0 01.01.504.858.858 0 01-.261.422L17.15 14.6l.854 3.328a.907.907 0 01-.025.507.857.857 0 01-.291.404.785.785 0 01-.919.02L14 16.984l-2.764 1.862a.784.784 0 01-.916-.012.855.855 0 01-.294-.4.906.906 0 01-.031-.505l.847-3.314-2.55-2.18a.858.858 0 01-.26-.421.9.9 0 01.01-.504.853.853 0 01.276-.41.782.782 0 01.448-.173l3.285-.184 1.188-3.201a.86.86 0 01.302-.394.79.79 0 01.918 0 .86.86 0 01.302.394z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="text-[12px] font-bold text-[#4da1ff] uppercase tracking-wider">
                                    TOP RATED
                                </span>
                            </div>

                            {/* JSS Badge */}
                            <div
                                className="flex items-center gap-1.5"
                                title="100% Job Success"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    role="img"
                                >
                                    <path
                                        fill="var(--icon-color, #026cda)"
                                        fill-rule="evenodd"
                                        d="M18.37 19.002H5.63v-1.867h12.74v1.867zm.02-3.736H5.608L3 8.314l4.992 1.664L12 5l4.008 4.978L21 8.314l-2.61 6.952z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="text-[12px] font-bold text-white uppercase tracking-wider text-nowrap">
                                    100% JSS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#14a800]/20 transition-colors border border-white/5">
                    <ExternalLink className="size-4 text-white/50 group-hover:text-[#14a800] transition-colors" />
                </div>
            </div>

            <p className="mt-6 text-sm text-white/60 leading-relaxed relative z-[1] font-medium max-w-[340px]">
                Looking for a professional Full-Stack Developer for your
                project? Let&apos;s connect on Upwork and bring your vision to
                life.
            </p>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between relative z-[1]">
                <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-3">
                        <div className="size-2.5 rounded-full bg-[#14a800] shadow-[0_0_10px_#14a800] animate-pulse"></div>
                        <span className="text-xs text-white font-anton uppercase tracking-[0.12em]">
                            10+ Projects Done
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="size-2.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))] animate-pulse"></div>
                        <span className="text-xs text-white font-anton uppercase tracking-[0.12em]">
                            300+ Hours Worked
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-base font-anton tracking-widest text-white group-hover:text-[#14a800] transition-colors uppercase">
                    Hire Me
                    <span className="inline-block transition-transform group-hover:translate-x-2 duration-300">
                        →
                    </span>
                </div>
            </div>
        </a>
    );
};

export default HireCard;
