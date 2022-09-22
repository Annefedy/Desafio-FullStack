import React, {useEffect, useState} from 'react';
import api from './api';
import {login, logout, getToken} from './auth';
import {Routes, Route, Navigate} from 'react-router-dom';