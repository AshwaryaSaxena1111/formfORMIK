import React, {useEffect, useState} from "react";
import axios from "axios";

const listValue = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {'X-Custom-Header': 'foobar'}
});


export default listValue;