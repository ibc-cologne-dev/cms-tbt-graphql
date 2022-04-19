import { getTbts, getLessons, getLessonResources } from '../services/firebase';

export const resolvers = {
  Query: {
    tbts: () => getTbts(),
    lessons: (_, { id }) => getLessons(id),
    lessonResources: (_, { id, tbtId }) => getLessonResources(id, tbtId),
  }
}