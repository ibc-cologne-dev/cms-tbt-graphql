import { getTbts, getLessons, getLessonResources } from '../services/firebase';

export const resolvers = {
  Query: {
    tbts: () => getTbts(),
    lessons: (_, { tbtId }) => getLessons(tbtId),
    lessonResources: (_, { lessonId, tbtId }) => getLessonResources(lessonId, tbtId),
  }
}