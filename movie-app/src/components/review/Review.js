import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewform/ReviewForm';
import React from 'react';

const Reviews = ({getMovieData,reviews,movie,setReviews,getReviews}) => {
    
  let paramns = useParams();
  const revText = useRef();
  const MovieId = paramns.movieId;  
    

  useEffect(() => {
    getMovieData(MovieId);
    //to do: function is working, data is appearing on the log, it needs implementation
    getReviews(MovieId);
  },[])

  const addReview = async(e) =>{
    e.preventDefault();
    const r = revText.current;

    try {
        const response = await api.post("api/v1/reviews",{reviewBody:r.value, imdbId: MovieId});
        
        const updateReviews = [...Reviews, {body:r.value}];
        


        r.value = " ";
        setReviews(updateReviews)

    } catch (error) {
        console.log(error);
    }
  }

 

    return(
        <Container>
                <h3>Reviews</h3>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col >
                <img  src={movie?.poster}/>
                </Col>
                <Col>
                 {
                    <div>
                        <Row>
                            <Col>
                            <ReviewForm handleSubmit={addReview} revText={revText} labelText="write a review!"> </ReviewForm>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </div>
                 }
                 {
                    //maps all the reviews and puts their body in this structure, one by one
                    reviews?.map((rev)=>{
                        
                     return(
                        <div>
                            <Row>
                                <Col>{rev.body}</Col>
                            </Row>
                        </div>
                     )  
                     })
                    
                 }
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews