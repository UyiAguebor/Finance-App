import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
    serviceTab: {value: number,
    title: string},
    index: number
  }




const CircularProgression: React.FC<Props> = ({ serviceTab, index }) => {
    // State to manage the progress bar percentage
    const [percentages, setPercentages] = useState([0, 0, 0]);
    
    // Ref for the container element
    const containerRef = useRef(null);
  
    // Intersection Observer to trigger animation when component comes into view
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const updatedPercentages = percentages.map((percentage, index) => {
                if (percentage < serviceTab[index].value) {
                  return percentage + 1;
                }
                return percentage;
              });
              setPercentages(updatedPercentages);
            }
          });
        },
        { threshold: 0 } // Change the threshold value as per your requirements
      );
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, [percentages, serviceTab]);