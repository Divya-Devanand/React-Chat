import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

import './App.css';


const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height='100vh'
            projectID="cc1090d3-ae46-4436-b18e-b71acb7e80ca"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;