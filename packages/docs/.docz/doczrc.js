import AnnotationResolver from 'react-docgen-annotation-resolver';

export default {
  typescript: true,
  docgenConfig: {
    searchPath: '../',
    resolver: AnnotationResolver,
  },
  filterComponents: files => {
    return files.filter(
      filepath =>
        /\/[A-Z]\w*\.(js|jsx|ts|tsx)$/.test(filepath) ||
        filepath.includes('/prism-ui/src/index.tsx') ||
        filepath.includes('/alert-ts/src/index.tsx')
    );
  },
};
