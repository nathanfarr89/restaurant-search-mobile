import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer lzZmDAIwM2uOeKAAsdfS0QUftifeT-a7iaXn9jyqhf9KvRWZkSNpQw6JL8GvbSsro14Pn1HloL3U0ryo4Cm0PWM9VCk3Jd-tKJlwJob0YaqVCvr90Y3kg2xCwuCLYXYx'
  }
})