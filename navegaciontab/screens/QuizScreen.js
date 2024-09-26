// screens/QuizScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import { RadioButton as PaperRadioButton } from 'react-native-paper';

// Definimos las preguntas del cuestionario
const questions = [
  {
    id: '1',
    question: '¿Cuál es el nombre del experimento que se escapa y se convierte en Stitch?',
    options: ['Jumba', 'Experiment 626', 'Lilo', 'Nani'],
    answer: '',
  },
  {
    id: '2',
    question: '¿Qué especie es Stitch?',
    options: ['Perro', 'Gato', 'Experimento', 'Pájaro'],
    answer: '',
  },
  {
    id: '3',
    question: '¿Dónde vive Lilo?',
    options: ['En una isla', 'En un apartamento', 'En un barco', 'En un bosque'],
    answer: '',
  },
  {
    id: '4',
    question: '¿Cuál es el hobbby de Lilo?',
    options: ['Surfear', 'Bailar', 'Fotografiar', 'Cocinar'],
    answer: '',
  },
  {
    id: '5',
    question: '¿Qué animal tiene Lilo como mascota?',
    options: ['Un perro', 'Una tortuga', 'Un muñeco', 'Un gato'],
    answer: '',
  },
];

const QuizScreen = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    questions.reduce((acc, question) => ({ ...acc, [question.id]: '' }), {})
  );

  const handleSelect = (questionId, value) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: value,
    });
  };

  const handleSubmit = () => {
    const allAnswered = questions.every(q => selectedAnswers[q.id] !== '');
    if (allAnswered) {
      Alert.alert('Respuestas Enviadas', `Respuestas: ${JSON.stringify(selectedAnswers)}`);
      
      // Resetear el cuestionario
      setSelectedAnswers(
        questions.reduce((acc, question) => ({ ...acc, [question.id]: '' }), {})
      );
    } else {
      Alert.alert('Error', 'Por favor, responde a todas las preguntas antes de enviar.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {questions.map((q) => (
        <View key={q.id} style={styles.questionContainer}>
          <Text style={styles.question}>{q.question}</Text>
          {q.options.map((option) => (
            <View key={option} style={styles.option}>
              <PaperRadioButton
                value={option}
                status={selectedAnswers[q.id] === option ? 'checked' : 'unchecked'}
                onPress={() => handleSelect(q.id, option)}
              />
              <Text style={styles.optionText}>{option}</Text>
            </View>
          ))}
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Enviar Respuestas" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default QuizScreen;
