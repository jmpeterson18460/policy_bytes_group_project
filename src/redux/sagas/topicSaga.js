import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

//gets all topics from database
function* fetchAllTopics(action){
    try{

        //topicResponse sends get request to router '/api/topic/alltopics' and 
        //receives back all topics from the database and stores them in topicResponse.data
        const topicResponse = yield call(axios.get, '/api/topic/alltopics')

        //sends all topics to newTopic reducer via action 'SET_ALL_TOPICS'
        //and payload topicResponse.data
        yield put({
            type: 'SET_ALL_TOPICS',
            payload: topicResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting topic: ', error);
        
    }
}

//gets the featured topic to be displayed on the topic page from the database
function* fetchFeaturedTopicPage(action){
    try{

        //topicResponse sends get request to router '/api/topic/featuredtopic' and 
        //receives back the topic admin wants to be the featured topic for the topic
        //page and stores it in topicResponse.data
        const topicResponse = yield call(axios.get, '/api/topic/featuredtopic')

        //sends new featured topic to newTopic reducer via action 'SET_FEATURED_TOPIC_TOPIC_PAGE'
        //and payload topicResponse.data
        yield put({
            type: 'SET_FEATURED_TOPIC_TOPIC_PAGE',
            payload: topicResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting topic: ', error);
        
    }
}

//gets the featured topic to be displayed on the landing page from the database
function* fetchFeaturedTopicLanding(action){
    try{

        //topicResponse sends get request to router '/api/topic/featuredlanding' and 
        //receives back the topic admin wants to be the featured topic on the landing
        //page and stores it in topicResponse.data
        const topicResponse = yield call(axios.get, '/api/topic/featuredlanding')

        //sends new featured topic to newTopic reducer via action 'SET_NEW_FEATURED_TOPIC'
        //and payload topicResponse.data
        yield put({
            type: 'SET_FEATURED_TOPIC_LANDING_PAGE',
            payload: topicResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting topic: ', error);
        
    }
}

//gets all of the archived topics for displaying them on the landing page
function* fetchArchivedTopics(action){
    try{

        //archivedResponse sends get request to router '/api/topic/archived' and 
        //receives back all archived topics and store them in archivedResponse.data
        const archivedResponse = yield call(axios.get, '/api/topic/archived')

        //sends all archived topics to archivedTopics reducer via action 'SET_ARCHIVED_TOPICS'
        //and payload archivedResponse.data
        yield put({
            type: 'SET_ARCHIVED_TOPICS',
            payload: archivedResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting topic: ', error);
        
    }
}

//gets all of the general comments based on the given topic id to display them on the topic page
function* fetchGeneralComments(action){
    try{

        //commentResponse sends get request to router '/api/topic/generalcomments' and 
        //receives back all general comments and store them in commentResponse.data
        const commentResponse = yield call(axios.get, '/api/topic/generalcomments')

        //sends all general comments to commentsGeneral reducer via action 'SET_GENERAL_COMMENTS'
        //and payload archivedResponse.data
        yield put({
            type: 'SET_GENERAL_COMMENTS',
            payload: commentResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting topic: ', error);
        
    }
}

//gets all of the comments for all key claims based on the given topic id to display them on the topic page
function* fetchKeyClaimComments(action){
    try{

        //commentResponse sends get request to router '/api/topic/keyclaimcomments' and 
        //receives back all general comments and store them in commentResponse.data
        const commentResponse = yield call(axios.get, '/api/topic/keyclaimcomments')

        //sends all general comments to commentsGeneral reducer via action 'SET_KEY_CLAIM_COMMENTS'
        //and payload archivedResponse.data
        yield put({
            type: 'SET_KEY_CLAIM_COMMENTS',
            payload: commentResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting topic: ', error);
        
    }
}

function* factionSaga() {
    yield takeLatest('FETCH_ALL_TOPICS', fetchAllTopics)
    yield takeLatest('FETCH_NEW_TOPIC_TOPIC_PAGE', fetchFeaturedTopicPage)
    yield takeLatest('FETCH_NEW_TOPIC_LANDING_PAGE', fetchFeaturedTopicLanding)
    yield takeLatest('FETCH_ARCHIVED_TOPICS', fetchArchivedTopics)
    yield takeLatest('FETCH_GENERAL_COMMENTS', fetchGeneralComments)
    yield takeLatest('FETCH_KEY_CLAIM_COMMENTS', fetchKeyClaimComments)
  }

  export default factionSaga;