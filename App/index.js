// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator, Button, ScrollView } from 'react-native';

const sampleWorkouts = [
    { id: '1', name: 'Push Ups', sets: 3, reps: 15 },
    { id: '2', name: 'Sit Ups', sets: 3, reps: 20 },
    { id: '3', name: 'Squats', sets: 4, reps: 12 },
    { id: '4', name: 'Pull Ups', sets: 3, reps: 10 },
    { id: '5', name: 'Lunges', sets: 3, reps: 15 },
];

const WorkoutList = () => {
    const [loading, setLoading] = useState(false);
    const [workouts, setWorkouts] = useState(sampleWorkouts);

    const fetchWorkouts = async () => {
        setLoading(true);
        setTimeout(() => {
            // Simulate network request
            setLoading(false);
        }, 2000); // Simulate loading time
    };

    return (
        <ScrollView style={styles.scrollView}>
            <Button title="Fetch Workouts" onPress={fetchWorkouts} />
            {loading ? <ActivityIndicator size="large" color="#0000ff" /> : (
                <FlatList
                    data={workouts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.workoutContainer}>
                            <Text style={styles.workoutName}>{item.name}</Text>
                            <Text style={styles.workoutDetail}>Sets: {item.sets}</Text>
                            <Text style={styles.workoutDetail}>Reps: {item.reps}</Text>
                        </View>
                    )}
                />
            )}
        </ScrollView>
    );
};

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Workout Tracker</Text>
            <WorkoutList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    workoutContainer: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    workoutName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    workoutDetail: {
        fontSize: 16,
    },
});

export default App;