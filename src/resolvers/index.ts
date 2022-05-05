import { getTbts, getLessons, getLessonResources, getAudios } from '../services/firebase';

export const resolvers = {
  Query: {
    tbts: () => getTbts(),
    audios: () => getAudios(),
    lessons: (_, { tbtId, sort }) => getLessons(tbtId, sort),
    lessonResources: (_, { lessonId, tbtId }) => getLessonResources(lessonId, tbtId),
  }
}