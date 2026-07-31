// src/services/studentService.js
const API_BASE = "http://localhost:3000/api/students";

async function handleResponse(response) {
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || body.message || `Request failed with ${response.status}`);
  }
  return response.json();
}

export async function getStudents() {
  const response = await fetch(API_BASE);
  return handleResponse(response);
}

export async function getStudentById(id) {
  const response = await `fetch(${API_BASE}/${id})`;
  return handleResponse(response);
}

export async function createStudent(data) {
  const response = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
}

export async function updateStudent(id, data) {
  const response = await `fetch(${API_BASE}/${id}, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })`;
  return handleResponse(response);
}

export async function deleteStudent(id) {
  const response = await `fetch(${API_BASE}/${id}, {
    method: "DELETE",
  })`;
  return handleResponse(response);
}