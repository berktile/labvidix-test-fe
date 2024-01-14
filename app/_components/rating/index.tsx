import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Star from "./Star";
import { useRatingMutation } from "./api/useRatingMutation";

interface RatingProps {
  processedDocumentId: string;
  ratingValue: number;
}

const Rating: React.FC<RatingProps> = ({ processedDocumentId, ratingValue }) => {
    const [rating, setRating] = useState<number>(ratingValue || 0);
    const { mutateAsync, isSuccess, isError, error } = useRatingMutation();
  
    const handleStarClick = (value: number) => {
      setRating(value);
      handleRating(value);
    };
  
    const handleRating = async (value: number) => {
      await mutateAsync({
        processedDocumentId,
        rating: value,
      });
    };
  
    useEffect(() => {
        if (isSuccess && rating !== ratingValue) {
          console.log("success");
       
          setRating(ratingValue || 0);
        }
      
        if (isError) {
          console.log(error);
        }
      }, [isSuccess, isError, error, ratingValue, rating]);
  
    return (
      <section className={styles.container}>
        <p>Evaluate the results</p>
        <div className={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <button
              className={`${styles.star} ${item <= rating ? styles.filled : ""}`}
              onClick={() => handleStarClick(item)}
              key={index}
            >
              
              <Star isFilled={item <= rating} />
            </button>
          ))}
        </div>
      </section>
    );
  };


export default Rating;
