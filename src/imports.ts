import { noop } from 'lodash/fp';
import { TextField, Typography, Button, MenuItem, Select } from '@mui/material';

import { CreditCardIcon, Form, SubmitButton } from './shared';
import WifiIcon from '@mui/icons-material/Wifi';
import SimCardIcon from '@mui/icons-material/SimCard';
import * as cardStyle from './shared/styles/cardFields';
import { useState } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './shared/model/schema';
// eslint-disable-next-line no-duplicate-imports
import type { Tcard } from './shared/model/schema';
import { FlipButton } from './shared/components/FlipButton';
import { CustomInputLabel } from './shared/components/CustomInputLabel';
import { handleExpireDateChange } from './shared/utilits/handleExpireDateChange';
import { CardImg } from './shared/assets/cardsImg';
import { handleCardNumberSpacing } from './shared/utilits/handleSpace';

export {
  noop,
  useState,
  Controller,
  Typography,
  useForm,
  CreditCardIcon,
  Form,
  SubmitButton,
  TextField,
  WifiIcon,
  SimCardIcon,
  cardStyle,
  schema,
  yupResolver,
  Button,
  MenuItem,
  Select,
  FlipButton,
  CustomInputLabel,
  handleExpireDateChange,
  CardImg,
  handleCardNumberSpacing
};
export type { SubmitHandler, Tcard };
