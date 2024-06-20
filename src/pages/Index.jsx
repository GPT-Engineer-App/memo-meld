import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  const addNote = () => {
    if (noteInput.trim() !== "") {
      setNotes([...notes, noteInput]);
      setNoteInput("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Note Taking App</Text>
        <HStack width="100%">
          <Input placeholder="Enter your note here..." value={noteInput} onChange={(e) => setNoteInput(e.target.value)} />
          <Button onClick={addNote} colorScheme="teal">
            Add Note
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {notes.map((note, index) => (
            <HStack key={index} width="100%" justifyContent="space-between" p={2} borderWidth="1px" borderRadius="md">
              <Text>{note}</Text>
              <IconButton aria-label="Delete note" icon={<FaTrash />} onClick={() => deleteNote(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
