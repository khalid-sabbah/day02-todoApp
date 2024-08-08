// import React from 'react';
// import { View, Text ,StyleSheet } from 'react-native';

// const TodoDetailsScreen = ({ route }) => {
//   const { todo } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{todo.title}</Text>
//       <Text style={styles.description}>{todo.description}</Text>
//       <Text style={styles.status}>Status: {todo.status}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#343a40',
//   },
//   description: {
//     fontSize: 18,
//     marginBottom: 20,
//     color: '#495057',
//   },
//   status: {
//     fontSize: 16,
//     color: '#6c757d',
//   },
// });

// export default TodoDetailsScreen;






import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoDetailsScreen = ({ route }) => {
  const { title, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
  },
});

export default TodoDetailsScreen;
