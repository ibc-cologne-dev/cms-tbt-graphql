import { getTbts, getLessons, getLessonResources, getLessonResource } from '../services/firebase';

export const resolvers = {
  Query: {
    tbts: () => getTbts(),
    lessons: (_, { id }) => getLessons(id),
    lessonResources: (_, { id, tbtId }) => getLessonResources(id, tbtId),
    lessonResource: (_, { id }) => getLessonResource(id),
  }
}