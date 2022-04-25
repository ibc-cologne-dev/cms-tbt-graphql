import { getTbts, getLessons, getLessonResources } from '../services/firebase';

export const resolvers = {
  Query: {
    tbts: () => getTbts(),
    lessons: (_, { tbtId, sort }) => getLessons(tbtId, sort),
    lessonResources: (_, { lessonId, tbtId }) => getLessonResources(lessonId, tbtId),
  }
}