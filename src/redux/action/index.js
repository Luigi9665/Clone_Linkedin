export const ADD_PROFILE = "ADD_PROFILE";
export const ADD_PROFILE_VISUAL = "ADD_PROFILE_VISUAL";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const DELETE_ESPERIENZE = "DELETE_ESPERIENZE";
export const DELETE_PROFILE = "DELETE_PROFILE";
export const GET_ESPERIENZE = "GET_ESPERIENZE";
export const ADD_POST = "ADD_POST";
export const ADD_COMMENT = "ADD_COMMENT";
// IMPORT DELLA CHIAVE PER LE FETCH
const key = import.meta.env.VITE_TOKEN_API;
const keyComments = import.meta.env.VITE_TOKEN_COMMENTS;

// FUNIONI PER RICHIAMARE LE AZIONI DEI REDUCERS
export const loginAction = (user) => ({ type: LOG_IN, payload: user });
export const logOutAction = () => ({ type: LOG_OUT });

export const deleteExperienceAction = () => ({ type: DELETE_ESPERIENZE });
export const deleteProfileAction = () => ({ type: DELETE_PROFILE });

// FETCH PER IL MIO PROFILO
export const addProfileAction = (indiceRicerca) => {
  const url = `https://striveschool-api.herokuapp.com/api/profile/${indiceRicerca}`;
  return async (dispatch, getState) => {
    console.log(getState);
    try {
      let response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          Authorization: key,
        },
      });
      if (response.ok) {
        const dataObj = await response.json();
        dispatch({ type: ADD_PROFILE, payload: dataObj });
      } else if (response.status === 401 || response.status === 403) {
        throw new Error("Autorizzazione fallita, controlla la tua API key.");
      } else if (response.status === 404) {
        throw new Error("Risorsa non trovata (404). Riprova con la ricerca.");
      } else if (response.status >= 500) {
        throw new Error("Errore del server, riprova più tardi.");
      } else {
        throw new Error("Errore nella richiesta: " + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// GET FETCH ESPERIENZE
export const getEsperienzeAction = (indiceRicerca) => {
  const url = `https://striveschool-api.herokuapp.com/api/profile/${indiceRicerca}/experiences`;
  return async (dispatch, getState) => {
    console.log(getState);
    try {
      let response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          Authorization: key,
        },
      });
      if (response.ok) {
        const dataEsperienze = await response.json();
        dispatch({ type: GET_ESPERIENZE, payload: dataEsperienze });
      } else if (response.status === 401 || response.status === 403) {
        throw new Error("Autorizzazione fallita, controlla la tua API key.");
      } else if (response.status === 404) {
        throw new Error("Risorsa non trovata (404). Riprova con la ricerca.");
      } else if (response.status >= 500) {
        throw new Error("Errore del server, riprova più tardi.");
      } else {
        throw new Error("Errore nella richiesta: " + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// FETCH PER IL PROFILO SELEZIONATO
export const addProfileVisualAction = (indiceRicerca) => {
  const url = `https://striveschool-api.herokuapp.com/api/profile/${indiceRicerca}`;
  return async (dispatch, getState) => {
    console.log(getState);
    try {
      let response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          Authorization: key,
        },
      });
      if (response.ok) {
        const dataObj = await response.json();
        dispatch({ type: ADD_PROFILE_VISUAL, payload: dataObj });
        dispatch(getEsperienzeAction(dataObj._id));
      } else if (response.status === 401 || response.status === 403) {
        throw new Error("Autorizzazione fallita, controlla la tua API key.");
      } else if (response.status === 404) {
        throw new Error("Risorsa non trovata (404). Riprova con la ricerca.");
      } else if (response.status >= 500) {
        throw new Error("Errore del server, riprova più tardi.");
      } else {
        throw new Error("Errore nella richiesta: " + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// GET FETCH POST
export const getPostAction = () => {
  const url = `https://striveschool-api.herokuapp.com/api/posts/`;
  return async (dispatch, getState) => {
    console.log(getState);
    try {
      let response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          Authorization: key,
        },
      });
      if (response.ok) {
        const dataPost = await response.json();
        const reverseData = dataPost.reverse();
        dispatch({ type: ADD_POST, payload: reverseData });
      } else if (response.status === 401 || response.status === 403) {
        throw new Error("Autorizzazione fallita, controlla la tua API key.");
      } else if (response.status === 404) {
        throw new Error("Risorsa non trovata (404). Riprova con la ricerca.");
      } else if (response.status >= 500) {
        throw new Error("Errore del server, riprova più tardi.");
      } else {
        throw new Error("Errore nella richiesta: " + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// GET FETCH COMMENTS
export const getCommentsAction = () => {
  const url = ` https://striveschool-api.herokuapp.com/api/comments/`;
  return async (dispatch, getState) => {
    console.log(getState);
    try {
      let response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          Authorization: keyComments,
        },
      });
      if (response.ok) {
        const dataComments = await response.json();
        dispatch({ type: ADD_COMMENT, payload: dataComments });
      } else if (response.status === 401 || response.status === 403) {
        throw new Error("Autorizzazione fallita, controlla la tua API key.");
      } else if (response.status === 404) {
        throw new Error("Risorsa non trovata (404). Riprova con la ricerca.");
      } else if (response.status >= 500) {
        throw new Error("Errore del server, riprova più tardi.");
      } else {
        throw new Error("Errore nella richiesta: " + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
