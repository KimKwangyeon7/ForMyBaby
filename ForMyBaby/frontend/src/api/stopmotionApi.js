import axiosWrapper from './axiosWrapper';

export const getMotionCnt = async () => {
    console.log('스톱모션 사진 수 가져오기!');
    try {
      const response = await axiosWrapper.get('/v1/stopmotion/count');
      return response.data.imageCount; // 개수 반환
    } catch (error) {
      console.error('스톱 모션 사진 수 가져오는데 에러 발생:', error);
      throw error; // 에러를 다시 던져서 상위 레벨에서 처리하도록 함
    }
};

export const getPresentUrl = async () => {
    console.log('스톱모션 영상 url 가져오기!');
    try {
      const response = await axiosWrapper.get('/v1/stopmotion');
      return response.data; // url 반환
    } catch (error) {
      console.error('스톱 모션 영상 url 가져올 때 에러 발생:', error);
      throw error; // 에러를 다시 던져서 상위 레벨에서 처리하도록 함
    }
};

export const sendMotionUrl = async (imageUrl) => {
  console.log('스톱모션 사진 url 보내기!');
  try {
    const response = await axiosWrapper.get(`/v1/stopmotion/create`, { params: { imageUrl: imageUrl } });
    return response.data; // url 반환
  } catch (error) {
    console.error('스톱 모션 영상 url 가져올 때 에러 발생:', error);
    throw error; // 에러를 다시 던져서 상위 레벨에서 처리하도록 함
  }
};


