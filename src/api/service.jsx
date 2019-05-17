import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5003/api',
  // withCredentials: true // => you might need this when having the users in the app 
});

const errorHandler = err => {
  throw err;
};

export default {
  service,

  handleUpload (theFile) {
    return service.post('/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler => console.log(errorHandler));
  },

  saveNewMedicalRecorder (newMedicalRecorder) { 
    return service.post('/NewMedicalRecorder/create', newMedicalRecorder)
    
      .then(res => res.data)
      .catch(errorHandler);
  }
}