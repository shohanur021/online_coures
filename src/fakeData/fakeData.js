import DATA from './index';

let fakeData = [...DATA];

const shuffle = (fd) => {
    for (let i = 0; i < fd.length; i++) {
        const j = Math.round(Math.random() * i);
        [fd[i], fd[j]] = [fd[j], fd[i]];
        
    }
    return fd;
}
shuffle(fakeData);

export default fakeData;