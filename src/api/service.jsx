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
      .catch(errorHandler);
  },

  saveNewMedicalRecorder (newMedicalRecorder) { 
    return service.post('/NewMedicalRecorder/create', newMedicalRecorder)
    
      .then(res => res.data)
      .catch(errorHandler);
  },

  editMedicalRecorder (id, MedicalRecorder) {
    return service.put(`/MedicalRecorder/edit/${id}`, MedicalRecorder)

    .then(res => res.data)
    .catch(errorHandler);
  },

  deleteMedicalRecorder (id) {
    return service.delete(`/MedicalRecorder/delete/${id}`)

    .then(res => res.data)
    .catch(errorHandler);
  },

  sendmail (name, email, message) {
    console.log ('ashbdjhasbdjhasbdj', name, email, message)
    return service.post(`/send-email`, {name: name, email: email, message: message})

    .then(res => res.data)
    .catch(errorHandler);
  }
}