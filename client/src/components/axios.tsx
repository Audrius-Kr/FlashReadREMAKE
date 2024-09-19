import axios from 'axios';

interface mode1Response {
    text: string;
}  

const fetchPostData = async (): Promise<string> => {
    try {
        const response = await axios.get('http://localhost:5076');
        return response.data;
    } catch (err) {
        console.error('Error fetching post:', err);
        return 'Error fetching post';
    }
};

const postTaskText = async (): Promise<mode1Response> => {
    try {
        const response = await axios.post('http://localhost:5076/postTaskText', {
            text: 'string'
        }, {
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        });
        console.log('Post response:', response.data);
        return response.data as mode1Response;
    } catch (err) {
        console.error('Error posting task text:', err);
        return { text: 'Error posting task text' };
    }
};

export { fetchPostData, postTaskText };